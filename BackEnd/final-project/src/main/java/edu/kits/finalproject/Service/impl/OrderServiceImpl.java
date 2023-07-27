package edu.kits.finalproject.Service.impl;

import edu.kits.finalproject.Repository.UserRepository;
import edu.kits.finalproject.entity.Order;
import edu.kits.finalproject.Repository.OrderRepository;
import edu.kits.finalproject.Service.OrderService;
import edu.kits.finalproject.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.Date;
import java.util.Optional;

@Service
public class OrderServiceImpl implements OrderService {
    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public Order store(String orderId, Date orderDate, double amount, String status, String courses, String userMail) throws IOException {

        Order order = new Order(orderId, orderDate, amount, status, courses, userMail);
        return orderRepository.save(order);
    }

    @Override
    public Order getOrderById(String orderId) {
        Optional<Order> result = orderRepository.findById(orderId);
        if(result.isPresent())
            return result.get();
        return new Order();
    }


}
