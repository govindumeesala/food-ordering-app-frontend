import { Order } from "@/types";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";

type Props = {
  order: Order;
};

const OrderStatusDetail = ({ order }: Props) => {
  return (
    <div className="space-y-5">
      <div className="flex flex-col">
        <span className="font-bold">Delivering to:</span>
        <span>{order.deliveryDetails.name}</span>
        <span>
          {order.deliveryDetails.addressLine1} {order.deliveryDetails.city}
        </span>
      </div>
      <div className="flex flex-col">
        <ul className="space-y-1.5">
          {order.cartItems.map((item) => (
            <li>
              <Badge variant="outline" className="mr-2">
                {item.quantity}
              </Badge>{" "}
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
      </div>
      <Separator />
      <div className="flex flex-col">
        <span>Total :</span>
        <span>₹{(order.totalAmount / 100).toFixed(2)}</span>
      </div>
    </div>
  );
};

export default OrderStatusDetail;
