import Image from "next/image";

export default function ImageGallery(){
    return (
        <div className="flex flex-col md:flex-row text-center md:text-start gap-8 mx-24 md:mx-8">
            <div className="w-full">
                <h3 className="text-2xl  text-slate-300">01</h3>
                <div  className="aspect-ratio   relative h-60">
					<Image
						className="object-cover rounded-lg hover:rounded-2xl backdrop-blur-lg transition-all cursor-pointer"
						fill={true}
						src="/beauty-designs-premium/forest-top-view.png"
						alt="forest top view"
					/>
				</div>
            </div>
            <div className="w-full">
                <h3 className="text-2xl  text-slate-300">02</h3>
                <div  className="aspect-ratio  relative  h-60">
					<Image
						className="object-cover rounded-lg hover:rounded-2xl backdrop-blur-lg transition-all cursor-pointer"
						fill={true}
						src="/beauty-designs-premium/lake.png"
						alt="lake"
					/>
				</div>
            </div>
            <div className="w-full">
                <h3 className="text-2xl text-slate-300">03</h3>
                <div  className="aspect-ratio  relative h-60">
					<Image
						className="object-cover rounded-lg hover:rounded-2xl backdrop-blur-lg transition-all cursor-pointer"
						fill={true}
						src="/beauty-designs-premium/land.png"
						alt="land"
					/>
				</div>
            </div>
        </div>
    )
}