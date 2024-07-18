import { Order, Restaurant } from "@/types";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQuery } from "react-query";
import { toast } from "sonner";
import { json } from "stream/consumers";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// getting data - useQuery hook
// posting or updating data - useMutation hook

export const useGetMyRestaurant = () => {
  const { getAccessTokenSilently } = useAuth0();

  const getMyRestaurantRequest = async (): Promise<Restaurant> => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(`${API_BASE_URL}/api/my/restaurant`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to get Restaurant");
    }

    return response.json();
  };

  const { data: restaurant, isLoading } = useQuery(
    "fetchMyRestaurant",
    getMyRestaurantRequest
  );

  return { restaurant, isLoading };
};

export const useCreateMyRestaurant = () => {
  const { getAccessTokenSilently } = useAuth0();

  const createMyRestaurantRequest = async (
    restaurantFormData: FormData
  ): Promise<Restaurant> => {
    const accessToken = await getAccessTokenSilently();
    // requesting api
    const response = await fetch(`${API_BASE_URL}/api/my/restaurant`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: restaurantFormData,
    });

    if (!response.ok) {
      throw new Error("Failed to create Restaurant");
    }

    return response.json();
  };

  const {
    mutate: createRestaurant,
    isLoading,
    isSuccess,
    error,
  } = useMutation(createMyRestaurantRequest);

  if (isSuccess) {
    toast.success("Restaurant Created!");
  }

  if (error) {
    toast.error("Unable to update Restaurant");
  }

  return { createRestaurant, isLoading };
};

export const useUpdateMyRestaurant = () => {
  const { getAccessTokenSilently } = useAuth0();

  const updateMyRestaurantRequest = async (
    restaurantFormData: FormData
  ): Promise<Restaurant> => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(`${API_BASE_URL}/api/my/restaurant`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: restaurantFormData,
    });

    if (!response) {
      throw new Error("Failed to update restaurant");
    }

    return response.json();
  };

  const {
    mutate: updatedRestaurant,
    isLoading,
    isSuccess,
    error,
  } = useMutation(updateMyRestaurantRequest);

  if (isSuccess) {
    toast.success("Restaurant updated successfully");
  }

  if (error) {
    toast.error("Unable to update restaurant");
  }

  return { updatedRestaurant, isLoading };
};

export const useGetMyRestaurantOrders = () => {
  const { getAccessTokenSilently } = useAuth0();

  const getMyRestaurantOrdersRequest = async (): Promise<Order[]> => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(`${API_BASE_URL}/api/my/restaurant/order`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed fetching orders");
    }

    return response.json();
  };

  const { data: orders, isLoading } = useQuery(
    "fetchMyRestaurantOrders",
    getMyRestaurantOrdersRequest
  );

  return { orders, isLoading };
};

type UpdateOrderStatusType = {
  orderId: string;
  status: string;
};

export const useUpdateMyRestaurantOrder = () => {
  const { getAccessTokenSilently } = useAuth0();

  const updateMyRestaurantOrderRequest = async (
    updateOrderStatus: UpdateOrderStatusType
  ) => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(
      `${API_BASE_URL}/api/my/restaurant/order/${updateOrderStatus.orderId}/status`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "content-Type": "application/json",
        },
        body: JSON.stringify({ status: updateOrderStatus.status }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to update status");
    }

    return response.json();
  };

  const {
    mutateAsync: updateRestaurantStatus,
    isError,
    isLoading,
    isSuccess,
    reset,
  } = useMutation(updateMyRestaurantOrderRequest);

  if (isSuccess) {
    toast.success("Order updated");
  }

  if (isError) {
    toast.error("Unable to update order");
    reset();
  }

  return { updateRestaurantStatus, isLoading };
};
