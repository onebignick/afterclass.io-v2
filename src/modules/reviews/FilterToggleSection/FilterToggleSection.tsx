"use client";
import { useState } from "react";

import { FilterToggleSection as Filter } from "@/common/components/FilterToggleSection";
import { type FilterItem } from "@/common/components/FilterToggleSection/FilterToggleSectionItem";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export type FilterToggleSectionProps =
  | {
      dataToFilter: FilterItem[];
      filterType: "course" | "professor";
      searchParamsName: string;
      onSelectChange?: (selectedValue: string) => void;
      isLocked?: false;
    }
  | {
      isLocked: true;
      filterType: "course" | "professor";
      searchParamsName?: string;
    };

export const FilterToggleSection = (props: FilterToggleSectionProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const params = new URLSearchParams(searchParams);
  const selected = params.getAll(props.searchParamsName ?? "");
  const [selectedItems, setSelectedItems] =
    useState<FilterItem["value"][]>(selected);

  if (props.isLocked)
    return (
      <Filter isLocked={props.isLocked}>
        <Filter.Header type={props.filterType} />
      </Filter>
    );

  const { dataToFilter, filterType, searchParamsName, onSelectChange } = props;

  const getNewSelectedItems = (selectedValue: string) =>
    selectedItems.includes(selectedValue)
      ? selectedItems.filter((v) => v !== selectedValue)
      : [...selectedItems, selectedValue];

  const updateSearchParams = (newSelectedItems: string[]) => {
    params.delete(searchParamsName);
    newSelectedItems.forEach((v) => params.append(searchParamsName, v));
    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <Filter>
      <Filter.Header type={filterType} />
      <Filter.Items>
        {dataToFilter.map((item, index) => (
          <Filter.Item
            key={index}
            {...item}
            onClick={() => {
              const newSelectedItems = getNewSelectedItems(item.value);
              setSelectedItems(newSelectedItems);
              onSelectChange?.(item.value);
              updateSearchParams(newSelectedItems);
            }}
            selected={selectedItems.includes(item.value)}
          />
        ))}
      </Filter.Items>
    </Filter>
  );
};
