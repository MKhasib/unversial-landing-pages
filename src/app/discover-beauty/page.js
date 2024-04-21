import Content from "./content";
import Designs from "./designs";
const DESIGNS = [
	{ src: "/beauty-designs/first-design.png", alt: "first design" },
	{ src: "/beauty-designs/second-design.png", alt: "second design" },
	{ src: "/beauty-designs/third-design.png", alt: "third design" },
	{ src: "/beauty-designs/fourth-design.png", alt: "fourth design" },
	{ src: "/beauty-designs/fifth-design.png", alt: "fifth design" },
	{ src: "/beauty-designs/sixth-design.png", alt: "sixth design" },
	{ src: "/beauty-designs/seventh-design.png", alt: "seventh design" },
	{ src: "/beauty-designs/eighth-design.png", alt: "eighth design" },
];
export default function DiscoverBeauty() {
	return (
		<div className="text-center mt-8">
			<Content />
			<Designs designs={DESIGNS} />
		</div>
	);
}
