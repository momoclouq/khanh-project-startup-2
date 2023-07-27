package edu.kits.finalproject.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ResponseDto {
    private String message;
    private String data;
    private String error;
    private String error_code;

    public ResponseDto(String message) {
        this.message = message;
    }
}
