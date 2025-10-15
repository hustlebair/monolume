'use client';
import React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FrameIcon, YoutubeIcon } from 'lucide-react';

interface FooterLink {
	title: string;
	href: string;
	icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
	label: string;
	links: FooterLink[];
}

const socialLinks: FooterLink[] = [
	{ title: 'TikTok', href: 'https://tiktok.com/@jakevibecodes' },
	{ title: 'YouTube', href: 'https://youtube.com/@jakevibecodes', icon: YoutubeIcon },
	{ title: 'X', href: 'https://x.com/jakevibecodes' },
];

export function MinimalFooter() {
	return (
		<footer className="md:rounded-t-6xl relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center rounded-t-4xl border-t bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)] px-6 py-12 lg:py-16">
			<div className="bg-foreground/20 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur" />

			<div className="flex w-full flex-col items-center gap-8">
				<AnimatedContainer className="space-y-4 text-center">
					<FrameIcon className="size-8 mx-auto" />
					<p className="text-muted-foreground text-sm">
						© {new Date().getFullYear()} Planet Take Over. All rights reserved.
					</p>
				</AnimatedContainer>

				<AnimatedContainer delay={0.1}>
					<div className="flex gap-6">
						{socialLinks.map((link) => (
							<a
								key={link.title}
								href={link.href}
								target="_blank"
								rel="noopener noreferrer"
								className="text-muted-foreground hover:text-foreground inline-flex items-center transition-all duration-300"
							>
								{link.icon && <link.icon className="me-1 size-4" />}
								{link.title}
							</a>
						))}
					</div>
				</AnimatedContainer>
			</div>
		</footer>
	);
};

type ViewAnimationProps = {
	delay?: number;
	className?: ComponentProps<typeof motion.div>['className'];
	children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
	const shouldReduceMotion = useReducedMotion();

	if (shouldReduceMotion) {
		return children;
	}

	return (
		<motion.div
			initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
			whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ delay, duration: 0.8 }}
			className={className}
		>
			{children}
		</motion.div>
	);
};