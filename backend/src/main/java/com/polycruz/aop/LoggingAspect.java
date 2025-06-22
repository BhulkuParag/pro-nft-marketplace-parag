package com.polycruz.aop;

import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.*;
import org.springframework.stereotype.Component;

@Aspect
@Component
@Slf4j
public class LoggingAspect {

    @Pointcut("execution(* com.polycruz..*(..))") // your base package
    public void applicationPackagePointcut() {}

    @Before("applicationPackagePointcut()")
    public void logBefore(JoinPoint joinPoint) {
        log.info("Entering: {} with arguments = {}", 
            joinPoint.getSignature(), joinPoint.getArgs());
    }

    @AfterReturning(value = "applicationPackagePointcut()", returning = "result")
    public void logAfterReturning(JoinPoint joinPoint, Object result) {
        log.info("Exiting: {} with result = {}", joinPoint.getSignature(), result);
    }

    @AfterThrowing(value = "applicationPackagePointcut()", throwing = "ex")
    public void logAfterThrowing(JoinPoint joinPoint, Exception ex) {
        log.error("Exception in {} with cause = {}", joinPoint.getSignature(), ex.getMessage());
    }
}
