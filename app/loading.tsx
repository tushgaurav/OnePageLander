import Image from 'next/image'

export default function Loading() {
    return (
        <div className="h-screen w-screen flex justify-center items-center">
            <Image src="/load.svg" className='animate-pulse' alt="xLogic Labs" width={300} height={200} />
            {/* <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900">.</div> */}
        </div>
    )
}