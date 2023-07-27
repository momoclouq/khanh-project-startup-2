package edu.kits.finalproject.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderDetailDto implements Serializable {
    private Long orderDetailId;
    private Long oderId;
    private Long productId;
    private int quantity;
    private double unitPrice;
}
