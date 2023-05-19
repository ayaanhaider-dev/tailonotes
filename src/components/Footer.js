import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
        <footer className="rounded-lg dark:bg-gray-900 m-4">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="/" className="flex items-center mb-4 sm:mb-0">
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">TailoNotes</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
                    <Link className="mr-4 hover:underline md:mr-6 " to="/">Home</Link>
                </li>
                <li>
                    <Link className="mr-4 hover:underline md:mr-6 " to="/about">About</Link>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="/" className="hover:underline">TailoNotes™</a>. All Rights Reserved.</span>
    </div>
</footer>
        </>
    )
}

export default Footer;