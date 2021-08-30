import React from "react";
import { Grid, Chip } from "@material-ui/core";
import { OtherChipsData } from "../../assets/otherChips";
import { theme } from "../../theme";
export const OtherChips: React.FC = () => {
	return (
		<>
			<Grid container justifyContent="center">
				{OtherChipsData.map((chip) => (
					<Chip key={chip.id} variant="outlined" size="small" label={chip.label} style={{ color: theme.palette.text.hint }} />
				))}
			</Grid>
		</>
	);
};
export const MemoizedOtherChips = React.memo(OtherChips);
