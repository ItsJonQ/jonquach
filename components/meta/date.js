import { parseISO, format } from "date-fns";
import styled from "@emotion/styled";

const DateUI = styled("div")`
	font-size: 11px;
	opacity: 0.4;
	margin-top: 8px;
	margin-bottom: 8px;
`;

export default function Date({ date: dataProp }) {
	if (!dataProp) return null;

	const date = parseISO(dataProp);

	return (
		<DateUI>
			<time dateTime={date}>{format(date, "LLLL	d, yyyy")}</time>
		</DateUI>
	);
}
