import { Jersey_10, Open_Sans } from "next/font/google";
import Link from 'next/link'
import Image from "next/image";
const jersey = Jersey_10({
	weight: "400",
	subsets: ["latin"],
});
const openSans = Open_Sans({
	weight: "300",
	subsets: ["latin"],
});
export default function Content(){
    return (
       <div className="flex flex-col justify-between md:align-start mx-24 my-16 gap-16 md:flex-row md:mx-8 md:my-4">
         <div className="flex flex-col justify-center items-center gap-4 md:text-left  md:basis-4/12 md:items-start">
        <h1 className={`text-5xl md:text-4xl font-bold ` + jersey.className}>
            Discover the beauty around the world
        </h1>
        <p className={openSans.className}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            in autem provident quas sed ad nostrum mollitia recusandae iste
            exercitationem, doloremque et vero minima laudantium, sapiente itaque
            ducimus a dolorum.
        </p>
        <Link href="/discover-beauty">
        <button
            className={
                openSans.className +
                ` bg-slate-950 text-white px-6 py-3 rounded-2xl hover:bg-slate-300 hover:text-black hover:font-bold md:px-5 md:py-2 md:rounded-lg`
            }>
                            Get started

        </button>
        </Link>
    </div>
    <div className="flex flex-col md:flex-row basis-9/12 gap-8">
    <div  className="aspect-ratio md:self-start relative  md:w-3/6 h-80">
					<Image
						className="object-cover rounded-lg hover:rounded-2xl backdrop-blur-lg transition-all cursor-pointer"
						fill={true}
						src="/beauty-designs-premium/leaf-water.png"
						alt="leaf with water"
					/>
				</div>
                <div  className="aspect-ratio md:self-end relative  md:w-3/6 h-80">
					<Image
						className="object-cover rounded-lg hover:rounded-2xl backdrop-blur-lg transition-all cursor-pointer"
						fill={true}
						src="/beauty-designs-premium/foggy-forest.png"
						alt="foggy forest"
					/>
				</div>
    </div>
       </div>
    )
}