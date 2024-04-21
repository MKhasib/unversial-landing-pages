import Image from "next/image";

export default function Designs({ designs }) {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 my-8 mx-48 md:mx-16 lg:mx-8 justify-center">
			{ designs.map((design, index) => (
				<div key={index} className="aspect-ratio relative  h-40">
					<Image
						className="object-cover rounded-lg hover:rounded-2xl backdrop-blur-lg transition-all cursor-pointer"
						fill={true}
						src={design.src}
						alt={design.alt}
					/>
				</div>
			))}
                
		</div>
	);
}
