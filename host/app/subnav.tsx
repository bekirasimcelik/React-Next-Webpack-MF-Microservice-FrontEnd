import Link from 'next/link';

export default function Page() {
    return (
        <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item" role="presentation">
                <Link className="nav-link" href="/">Root</Link>
            </li>
            <li className="nav-item" role="presentation">
                <Link className="nav-link" href="/products-remote">Products</Link>
            </li>
            <li className="nav-item" role="presentation">
                <Link className="nav-link" href="/basket-remote">Basket</Link>
            </li>
            <li className="nav-item" role="presentation">
                <Link className="nav-link" href="/product2-remote">Product2 Remote</Link>
            </li>
        </ul>
    )
}
