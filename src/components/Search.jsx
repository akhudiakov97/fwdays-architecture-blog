"use client";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";
import { Separator } from "./ui/separator";

import data from "../../_data/sources.json";

export const Search = () => {
  const sources = data.sources;
  return (
    <div className="flex w-1/6">
      <Command>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup>
            {sources.length === 0 ? (
              <div>...Loading</div>
            ) : (
              sources?.map((source) => (
                <CommandItem key={source.id}>{source.title}</CommandItem>
              ))
            )}
          </CommandGroup>
        </CommandList>
      </Command>

      <Separator orientation="vertical" className="mr-8" />
    </div>
  );
};

export default Search;
