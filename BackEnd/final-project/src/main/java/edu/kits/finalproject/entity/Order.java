package edu.kits.finalproject.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "orders")
public class Order implements Serializable {
    @Id
    private String orderId;



    @Temporal(TemporalType.DATE)
    private Date orderDate;

    //    @Column(nullable = false)
    //    private int customerId;
    @Column(nullable = false)
    private double amount;

    @Column(nullable = false)
    private String status;

//    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL)
    @Column
    private String courses;

    @Column(columnDefinition = "nvarchar(100) not null")
    private String userMail;


    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    public Order(String orderId, Date orderDate, double amount, String status, String courses, String userMail) {
        this.orderId = orderId;
        this.orderDate = orderDate;
        this.amount = amount;
        this.status = status;
        this.courses = courses;
        this.userMail = userMail;


    }


    //    @ManyToOne
//    @JoinColumn(name = "customerId")
//    private Customer customer;

//    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL)
//    private Set<OrderDetail> orderDetails;
}