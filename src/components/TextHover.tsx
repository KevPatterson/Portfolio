type TTextHoverProps = {
	text: string;
	className?: string;
};

export const TextHover = ({ text, className = '' }: TTextHoverProps) => {
	const words = text.split(' ');
	
	return (
		<h1 className={className}>
			{words.map((word, wordIndex) => (
				<span key={wordIndex} className="hover-text">
					{word.split('').map((char, charIndex) => (
						<span
							key={charIndex}
							data-char={char}
							style={{
								['--delay' as any]: `${0.05 * charIndex}s`,
							}}
						>
							{char}
						</span>
					))}
					{wordIndex < words.length - 1 && ' '}
				</span>
			))}
		</h1>
	);
};
