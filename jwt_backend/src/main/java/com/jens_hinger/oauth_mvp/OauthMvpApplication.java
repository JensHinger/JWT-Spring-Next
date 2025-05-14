package com.jens_hinger.oauth_mvp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
public class OauthMvpApplication {

	public static void main(String[] args) {
		SpringApplication.run(OauthMvpApplication.class, args);
	}

}
