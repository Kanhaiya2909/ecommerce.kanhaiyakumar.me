package kanhaiyakumar.me.dto;

import kanhaiyakumar.me.entity.product.Address;
import kanhaiyakumar.me.entity.product.Customer;
import kanhaiyakumar.me.entity.product.Order;
import kanhaiyakumar.me.entity.product.OrderItem;
import lombok.Data;

import java.util.Set;

@Data
public class Purchase {

    private Customer customer;

    private Address shippingAddress;

    private Address billingAddress;

    private Order order;

    private Set<OrderItem> orderItems;

}
