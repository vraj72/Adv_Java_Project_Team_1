package com.project.dto;

public class StatusT {
	
	private boolean status;
	private String message;
	private String output;
	

	public StatusT(String message ,boolean status) {
		super();
		this.status = status;
		this.message = message;
	}
	public StatusT() {
		// TODO Auto-generated constructor stub
	}
	public String getOutput() {
		return output;
	}
	public void setOutput(String output) {
		this.output = output;

	}
	public boolean isStatus() {
		return status;
	}
	public void setStatus(boolean status) {
		this.status = status;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
}
