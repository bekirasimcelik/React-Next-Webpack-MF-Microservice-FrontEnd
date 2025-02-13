import React from "react";
import Layout from "../app/layout";
import { importRemote } from "@module-federation/utilities";
import dynamic from "next/dynamic";
import PageLoader from "@shared/components/page-loader";
import { ErrorBoundary } from "@shared/components/error-boundary";

interface ProductsPageProps {
    remoteUrl: string;
}

const ProductsPage = ({ remoteUrl }: ProductsPageProps) => {
    const ProductsRemote = dynamic(
        async () => {
            return importRemote<typeof React.Component>({
                url: remoteUrl,
                scope: 'remote_products',
                module: 'Application',
                remoteEntryFileName: 'remote.js',
                bustRemoteEntryCache: true,
            });
        },
        { ssr: false, loading: () => <PageLoader label="Loading products remote..." /> }
    );
	return (
		<Layout>
			<ErrorBoundary>
				<ProductsRemote />
			</ErrorBoundary>
		</Layout>
	);
};
export async function getServerSideProps() {
    return {
        props: {
            remoteUrl: "http://localhost:3003",
        } as ProductsPageProps,
    };
}

export default ProductsPage;
