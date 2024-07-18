import { Order } from "@/types";
import { Progress } from "./ui/progress";
import { ORDER_STATUS } from "@/config/order-status-config";

type Props = {
  order: Order;
};

const OrderStatusHeader = ({ order }: Props) => {
  const getExpectedDelivery = () => {
    if (order.status === "delivered") {
      return "";
    }

    const created = new Date(order.createdAt);

    created.setMinutes(
      created.getMinutes() + order.restaurant.estimatedDeliveryTime
    );

    const hours = created.getHours();
    const mins = created.getMinutes();

    const paddedMins = mins < 10 ? `0${mins}` : mins;

    return `Expected by: ${hours}:${paddedMins}`;
  };

  const getOrderStatusInfo = () => {
    return (
      ORDER_STATUS.find((ord) => ord.value === order.status) || ORDER_STATUS[0]
    );
  };

  return (
    <>
      <h1 className="text-lg sm:text-2xl md:text-4xl font-bold tracking-tighter flex flex-col gap-5 md:flex-row md:justify-between">
        <span>Order Status: {getOrderStatusInfo().label}</span>
        <span>{getExpectedDelivery()}</span>
      </h1>
      <Progress
        className="animate-pulse"
        value={getOrderStatusInfo().progressValue}
      />
    </>
  );
};

export default OrderStatusHeader;
