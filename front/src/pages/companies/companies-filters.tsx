import { FilterDefinitionByEntity } from '@/ui/data/filter/types/FilterDefinitionByEntity';
import {
  IconBuildingSkyscraper,
  IconCalendarEvent,
  IconLink,
  IconMap,
  IconUser,
  IconUsers,
} from '@/ui/display/icon/index';
import { FilterDropdownUserSearchSelect } from '@/users/components/FilterDropdownUserSearchSelect';
import { Company } from '~/generated/graphql';

export const companyAvailableFilters: FilterDefinitionByEntity<Company>[] = [
  {
    key: 'name',
    label: 'Name',
    Icon: IconBuildingSkyscraper,
    type: 'text',
  },
  {
    key: 'employees',
    label: 'Employees',
    Icon: IconUsers,
    type: 'number',
  },
  {
    key: 'domainName',
    label: 'URL',
    Icon: IconLink,
    type: 'text',
  },
  {
    key: 'address',
    label: 'Address',
    Icon: IconMap,
    type: 'text',
  },
  {
    key: 'createdAt',
    label: 'Created at',
    Icon: IconCalendarEvent,
    type: 'date',
  },
  {
    key: 'accountOwnerId',
    label: 'Account owner',
    Icon: IconUser,
    type: 'entity',
    entitySelectComponent: <FilterDropdownUserSearchSelect />,
  },
];
