// ### reusable structure components / HTML tags

// export const Paragraph = (className, text) => {
// 	return <p className={className}>{text}</p>;
// };

export const Button = ({ buttonClass, title }) => {
	return (
		<button className={`main-btn ${buttonClass}`} type='button'>
			<span>{title}</span>
		</button>
	);
};
