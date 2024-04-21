import Content from "./content";
import Designs from "./designs";
const DESIGNS = [
	{ src: "/unversial-landing-pages/beauty-designs/first-design.png", alt: "first design" },
	{ src: "/unversial-landing-pages/beauty-designs/second-design.png", alt: "second design" },
	{ src: "/unversial-landing-pages/beauty-designs/third-design.png", alt: "third design" },
	{ src: "/unversial-landing-pages/beauty-designs/fourth-design.png", alt: "fourth design" },
	{ src: "/unversial-landing-pages/beauty-designs/fifth-design.png", alt: "fifth design" },
	{ src: "/unversial-landing-pages/beauty-designs/sixth-design.png", alt: "sixth design" },
	{ src: "/unversial-landing-pages/beauty-designs/seventh-design.png", alt: "seventh design" },
	{ src: "/unversial-landing-pages/beauty-designs/eighth-design.png", alt: "eighth design" },
];
export default function DiscoverBeauty() {
	return (
		<div className="text-center mt-8">
			<Content />
			<Designs designs={DESIGNS} />
		</div>
	);
}
