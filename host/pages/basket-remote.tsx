import React from "react";
import Layout from "../app/layout";
import { importRemote } from "@module-federation/utilities";
import dynamic from "next/dynamic";
import PageLoader from "@shared/components/page-loader";
import { ErrorBoundary } from "@shared/components/error-boundary";

interface BasketPageProps {
    remoteUrl: string;
}

const BasketPage = ({ remoteUrl }: BasketPageProps) => {
    const BasketRemote = dynamic(
        async () => {
            return importRemote<typeof React.Component>({
                url: remoteUrl,
                scope: 'remote_basket',
                module: 'Application',
                remoteEntryFileName: 'remote.js',
                bustRemoteEntryCache: true,
            });
        },
        { ssr: false, loading: () => <PageLoader label="Loading basket remote..." /> }
    );
	return (
		<Layout>
			<ErrorBoundary>
				<BasketRemote />
			</ErrorBoundary>
		</Layout>
	);
};
export async function getServerSideProps() {
    return {
        props: {
            remoteUrl: "http://localhost:3001",
        } as BasketPageProps,
    };
}

export default BasketPage;
