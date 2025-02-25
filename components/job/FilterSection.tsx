"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { X, Filter } from "lucide-react";

const ALL_LOCATIONS = "all_locations";

export const formatCurrency = (number: number) => {
  return new Intl.NumberFormat("en-US").format(number);
};

export default function FilterSection({
  uniqueLocations,
  currentFilters,
}: {
  uniqueLocations: string[];
  currentFilters: {
    title: string;
    location: string;
    minSalary: number;
    maxSalary: number;
  };
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);

  const updateFilters = (updates: Record<string, string | number>) => {
    const params = new URLSearchParams(searchParams.toString());
    Object.entries(updates).forEach(([key, value]) => {
      if (value && value !== ALL_LOCATIONS) {
        params.set(key, String(value)); // Ensure values are converted to strings
      } else {
        params.delete(key);
      }
    });
    router.push(`?${params.toString()}`);
  };

  const clearFilters = () => {
    const params = new URLSearchParams(searchParams.toString());
    ["title", "location", "minSalary", "maxSalary"].forEach((key) =>
      params.delete(key)
    );
    router.push(`?${params.toString()}`);
  };

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        onClick={() => {
          if (showFilters) {
            clearFilters();
          }
          setShowFilters(!showFilters);
        }}
        className="flex items-center gap-2"
      >
        {showFilters ? (
          <X className="h-4 w-4" />
        ) : (
          <Filter className="h-4 w-4" />
        )}
        {showFilters ? "Hide Filters" : "Show Filters"}
      </Button>

      {showFilters && (
        <Card>
          <CardHeader>
            <CardTitle>Filters</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title-filter">Job Title</Label>
              <Input
                id="title-filter"
                placeholder="Filter by title"
                value={currentFilters.title}
                onChange={(e) => updateFilters({ title: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="location-filter">Location</Label>
              <Select
                value={currentFilters.location || ALL_LOCATIONS}
                onValueChange={(value) => updateFilters({ location: value })}
              >
                <SelectTrigger id="location-filter">
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={ALL_LOCATIONS}>All Locations</SelectItem>
                  {uniqueLocations.map((location) => (
                    <SelectItem key={location} value={location}>
                      {location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Salary Range</Label>
              <Slider
                min={0}
                max={200000}
                step={10000}
                value={[currentFilters.minSalary, currentFilters.maxSalary]}
                onValueChange={([min, max]) =>
                  updateFilters({
                    minSalary: Number(min),
                    maxSalary: Number(max),
                  })
                }
                className="mt-2"
              />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>${formatCurrency(currentFilters.minSalary)}</span>
                <span>${formatCurrency(currentFilters.maxSalary)}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
}
