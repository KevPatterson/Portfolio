type TTextHoverProps = {
	text: string;
	className?: string;
};

export const TextHover = ({ text, className = '' }: TTextHoverProps) => {
	return (
		<h1 className={className}>
			<span className="hover-text">
				{text.split('').map((char, index) => (
					<span
						key={index}
						data-char={char}
						style={{
							['--delay' as any]: `${0.05 * index}s`,
						}}
					>
						{char}
					</span>
				))}
			</span>
		</h1>
	);
};
