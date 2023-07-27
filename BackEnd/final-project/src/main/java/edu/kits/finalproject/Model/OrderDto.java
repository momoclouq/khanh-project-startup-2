package edu.kits.finalproject.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderDto implements Serializable {
    private String orderId;
    private Date orderDate;
    private String courses;
    private double amount;
    private String status;
}
