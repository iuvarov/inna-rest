package ru.innopolis.stc27.maslakov.enterprise.project42.controllers.user;

import lombok.AllArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.innopolis.stc27.maslakov.enterprise.project42.dto.SignupGuestDTO;
import ru.innopolis.stc27.maslakov.enterprise.project42.dto.SignupStaffDTO;
import ru.innopolis.stc27.maslakov.enterprise.project42.entities.users.User;
import ru.innopolis.stc27.maslakov.enterprise.project42.services.register.RegisterService;

import javax.validation.Valid;
import java.util.Optional;

@RestController
@AllArgsConstructor
@RequestMapping(produces = MediaType.APPLICATION_JSON_VALUE)
public class RegisterController {

    private final RegisterService registerService;

    @ResponseBody
    @PostMapping(value = "/register", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> register(@Valid @RequestBody SignupGuestDTO data) {
        Optional<User> user = registerService.signup(data);
        return user.isPresent() ?
                ResponseEntity.ok().build() : ResponseEntity.badRequest()
                .body("Пользователь с таким именем уже существует.");
    }

    @PostMapping(value = "/staff/register", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> staffRegister(@Valid @RequestBody SignupStaffDTO data) {
        Optional<User> user = registerService.signup(data);
        return user.isPresent() ? ResponseEntity.ok().build() : ResponseEntity.badRequest().build();
    }

}
