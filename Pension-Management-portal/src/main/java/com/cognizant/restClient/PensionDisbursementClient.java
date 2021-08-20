package com.cognizant.restClient;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;

import com.cognizant.model.ProcessPensionInput;
import com.cognizant.model.ProcessPensionResponse;

@FeignClient(name = "PensionDisburesmentService", url = "http://localhost:9083")
public interface PensionDisbursementClient {
	
	@PostMapping("/disbursePension")
	public ProcessPensionResponse getPensionDisbursement(@RequestHeader(name = "Authorization") String token,
			@RequestBody ProcessPensionInput processPensionInput);

}

