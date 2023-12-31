import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IDividerProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLHRElement>, HTMLHRElement> {
	arrow?: boolean;
	muted?: boolean;
}
