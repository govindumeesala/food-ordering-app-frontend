import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormField, FormItem } from "./ui/form";
import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useEffect } from "react";

const formSchema = z.object({
  searchQuery: z.string().min(1, { message: "Restaurant name is required!" }),
  //   searchQuery: z.string({
  //     required_error: "Restaurant name is required",
  //   }),
});

export type SearchForm = z.infer<typeof formSchema>;

type Props = {
  onSubmit: (formData: SearchForm) => void;
  placeHolder: string;
  onReset?: () => void;
  searchQuery: string;
};

const SearchBar = ({ onSubmit, onReset, placeHolder, searchQuery }: Props) => {
  const form = useForm<SearchForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      searchQuery,
    },
  });

  useEffect(() => {
    form.reset({ searchQuery });
  }, [form, searchQuery]);

  const handleReset = () => {
    form.reset({
      searchQuery: "",
    });

    if (onReset) {
      onReset();
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={`flex items-center gap-3 justify-between border-2 rounded-full border-2 p-1 md:p-3 ${
          form.formState.errors.searchQuery && "border-red-500"
        }`}
      >
        <Search
          strokeWidth={2.5}
          size={30}
          className="ml-1 text-orange-500 hidden sm:block"
        />
        <FormField
          control={form.control}
          name="searchQuery"
          render={({ field }) => (
            <FormItem className="flex-1">
              <Input
                {...field}
                className="border-none shadow-none sm:text-lg md:text-xl focus-visible: ring-0"
                placeholder={placeHolder}
              />
            </FormItem>
          )}
        />

        <Button
          onClick={handleReset}
          type="button"
          variant="outline"
          className="rounded-full"
        >
          Clear
        </Button>

        <Button type="submit" className="rounded-full bg-orange-500">
          Search
        </Button>
      </form>
    </Form>
  );
};

export default SearchBar;
