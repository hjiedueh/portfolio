import Link from 'next/link'
import { Container } from './container'
import Image from 'next/image'


export const Navigation = () => {

    return (
        <header>
            {/* Nav Bar */}
            <nav className='relative flex w-full items-center justify-between bg-white py-2 text-neutral-600 shadow-lg hover:text-neutral-600 focus:text-neutral-700 dark:bg-neutral-600 dark:text-neutral-200 md:flex-wrap md:justify-start' data-te-navbar-ref>
                <div className='flex w-full flex-wrap items-center justify-between px-3'>
                    <div className='flex items-center'>
                        {/*Menu button */}
                        <button
                            className='border-0 bg-transparent px-2 text-xl leading-none transition-shadow duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:hidden'
                            type='button'
                            data-te-collapse-init
                            data-te-target='#navbarSupportedContentY'
                            aria-controls='navbarSupportedContentY'
                            aria-expanded='false'
                            aria-label='Toggle navigation'>
                                <span className='[&>svg]:w-5'>
                                    <svg
                                        xmlns='https://www.w3.org/2000/svg'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        stroke-width='1.5'
                                        stroke='currentColor'
                                        className='h-7 w-7'>
                                            <path
                                                stroke-linecap='round'
                                                stroke-linejoin='round'
                                                d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
                                        </svg>
                                </span>
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    )
}