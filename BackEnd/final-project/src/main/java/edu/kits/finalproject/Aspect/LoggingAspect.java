package edu.kits.finalproject.Aspect;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class LoggingAspect {
    @Before("execution(* edu.kits.finalproject.Controller.Admin.ProductController.*(..)) || "
            + "execution(* edu.kits.finalproject.Service.ProductService.*(..))")

    public void beforeMethodExecution(JoinPoint joinPoint) {
        String className = joinPoint.getTarget().getClass().getSimpleName();
        String methodName = joinPoint.getSignature().getName();
        System.out.println("Executing method: " + className + "." + methodName);
    }
    @AfterReturning(pointcut = "execution(* edu.kits.finalproject.Controller.Admin.ProductController.*(..)) || "
            + "execution(* edu.kits.finalproject.Service.ProductService.*(..))", returning = "result")
    public void afterMethodExecution(JoinPoint joinPoint, Object result) {
        String className = joinPoint.getTarget().getClass().getSimpleName();
        String methodName = joinPoint.getSignature().getName();
        System.out.println("Finished executing method: " + className + "." + methodName);
        System.out.println("Result: " + result);
    }}