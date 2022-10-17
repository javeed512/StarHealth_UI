package com.starhealth.springrestapi;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class SpringrestapiApplicationTests {

	@BeforeEach
	public static void before() {
		
		System.out.println("before every test case");
		
	}
	
	@Test
	void contextLoads1() {
		System.out.println("Hello");
	}

	
	@Test
	void contextLoads2() {
		System.out.println("Thank you");
	}

	
}
