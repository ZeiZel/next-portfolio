import { ISocialList } from '@/helpers';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ISocialListProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
	socialList: ISocialList[];
}
