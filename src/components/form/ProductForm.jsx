import { z } from "zod";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";

const productFormSchema = z.object({
  name: z
    .string()
    .min(3, "Your product name is under 3 characters")
    .max(50, "Your product name is over 50 characters"),
  price: z.coerce.number().min(1000, "Price can't be under Rp. 1.000,-"),
  stock: z.coerce.number().min(1, "Stock can't be under 1"),
  imgUrl: z.string().url("Use a valid URL"),
});

const ProductForm = (props) => {
  const [buttonCreate, setButtonCreate] = useState(false);

  const {
    onSubmit,
    cardTitle,
    buttonTitle,
    isLoading,
    defaultName,
    defaultPrice,
    defaultStock,
    defaultImgUrl,
  } = props;

  const form = useForm({
    mode: "onChange",
    defaultValues: {
      name: defaultName || "",
      price: defaultPrice || 0,
      stock: defaultStock || 0,
      imgUrl: defaultImgUrl || "",
    },
    resolver: zodResolver(productFormSchema),
  });
  useEffect(() => {
    setButtonCreate(form.formState.isValid);
  }, [form.formState.isValid]);

  return (
    <Form {...form}>
      <form
        className="w-full max-[540px]"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <Card>
          <CardHeader>
            <CardTitle className="font-bold">{cardTitle}</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormDescription>
                    Product name has to be between 3 and 50 characters
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product price</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="stock"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product stock</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="imgUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Image</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormDescription>
                    Please use a valid image URL.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <Button
              disabled={!buttonCreate || isLoading}
              type="submit"
              className="w-full"
            >
              {buttonTitle}
            </Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
};

export default ProductForm;
