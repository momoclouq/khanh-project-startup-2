package edu.kits.finalproject.entity;


import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public enum Permission {
    STUDENT_READ("student:read"),
    STUDENT_UPDATE("student:update"),
    STUDENT_CREATE("student:create"),
    STUDENT_DELETE("student:delete"),
    TUTOR_READ("tutor:read"),
    TUTOR_UPDATE("tutor:update"),
    TUTOR_CREATE("tutor:create"),
    TUTOR_DELETE("tutor:delete")

    ;

    @Getter
    private final String permission;
}
