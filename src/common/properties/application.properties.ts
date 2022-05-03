import { SortOptionsEnum } from '../enums/sort-options.enum';
import { DropdownOptionsListInterface } from '../intefaces/dropdown-options-list.interface';

export const SORT_OPTIONS: DropdownOptionsListInterface[] = [
  {
    id: SortOptionsEnum.ALL,
    name: 'All'
  },
  {
    id: SortOptionsEnum.ALPHABET,
    name: 'Alphabet'
  },
  {
    id: SortOptionsEnum.YEAR,
    name: 'Year'
  },
  {
    id: SortOptionsEnum.ONSITE,
    name: 'On Site Date'
  },
]
export const FILMS_KEY: string = "films"
export const FAVORITE_FILMS_KEY: string = "favorite"
