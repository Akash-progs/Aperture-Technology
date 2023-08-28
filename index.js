import {
  Autocomplete,
  Box,
  Button,
  Card,
  Divider,
  FormControl,
  FormControlLabel,
  Paper,
  Radio,
  RadioGroup,
  Stack,
  TextField,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CloseIcon from "@mui/icons-material/Close";
import SaveIcon from "@mui/icons-material/Save";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import React from "react";
const LclFinelPayment = () => {
  const tblHeader = [
    { Header: "SrNo" },
    { Header: "Branch" },
    { Header: "LCL No" },
    { Header: "Vou Amount" },
    { Header: "Advance" },
    { Header: "Balance Amt" },
    { Header: "TDS Flag" },
    { Header: "TDS Amt" },
    { Header: "TDS Per" },
    { Header: "Net Amount" },
    { Header: "CNS/CLN" },
    { Header: "Vendor" },
    { Header: "Pan No" },
    { Header: "Payment Made To" },
    { Header: "Broker Code" },
    { Header: "LCL Total" },
    { Header: "Show Pod" },
  ];

  const tblHeader2 = [
    { Header: "Sr No" },
    { Header: "Branch Code" },
    { Header: "Cust Code" },
    { Header: "Cust Name" },
    { Header: "CNS No" },
    { Header: "CNS Date" },
    { Header: "Amount" },
  ];
  return (
    <div  style={{marginTop:"4%" , marginLeft:"2%" , marginRight:"2%"}}>
      <Paper
        sx={{
          backgroundColor: "#f0d481",
          textAlign: "center",
        }}
      >
        {/* <center> */}
        <b
          style={{
            fontWeight: "bolder",
            fontSize: "18px",
            fontFamily: "serif",
          }}
        >
          LCL FINAL PAYMENT
        </b>
        {/* </center> */}
      </Paper>
      <Card>
        <form
          className="form1trip m-2"
          id="form1"
          autoComplete="off"
          style={{ height: "580px", overflowX: "hidden", overflowY: "auto" }}
        >
          <Stack
            direction={{ xs: "column", sm: "column", md: "row", lg: "row" }}
            justifyContent="center"
            pt="10px"
            spacing={1}
          >
            <Box
              component="span"
              style={{
                border: "0px dashed grey",
                width: "10%",
                backgroundColor: "sandybrown",
              }}
              className="text-center"
            >
              <b
                style={{ fontSize: "12px", display: "inline", color: "white" }}
              >
                Under Credit Days
              </b>
            </Box>
            <Box
              component="span"
              style={{
                border: "0px dashed grey",
                width: "10%",
                backgroundColor: "red",
              }}
              className="text-center"
            >
              <b
                style={{ fontSize: "12px", display: "inline", color: "white" }}
              >
                CLN Ack Not OK
              </b>
            </Box>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                inputFormat="dd/MM/yyyy"
                label="From Date"
                size="small"
                // sx={{width:"100px"}}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    size="small"
                    sx={{
                      "& > :not(style)": {
                        fontSize: "12px",
                        color: "black",
                        height: "28px",
                        // width: "100%",
                      },
                    }}
                    style={{ width: "12%" }}
                  />
                )}
              />
            </LocalizationProvider>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                inputFormat="dd/MM/yyyy"
                label="To Date"
                size="small"
                // sx={{width:"100px"}}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    size="small"
                    sx={{
                      "& > :not(style)": {
                        fontSize: "12px",
                        color: "black",
                        height: "28px",
                        // width: "100%",
                      },
                    }}
                    style={{ width: "12%" }}
                  />
                )}
              />
            </LocalizationProvider>
            <Button
              variant="contained"
              sx={{ fontSize: "11px", height: "28px" }}
              startIcon={<VisibilityIcon fontSize="11px" />}
            >
              Show
            </Button>
          </Stack>
          <Paper elevation={2} sx={{ p: "10px", mt: "5px" }}>
            <div
              style={{
                overflowY: "auto",
                overflowX: "auto",
                height: "180px",
              }}
            >
              <table className="fl-table" id="tab2">
                <thead>
                  <tr>
                    {tblHeader.map((datas, i) => {
                      return (
                        <th
                          style={{
                            fontSize: "10px",
                            backgroundColor: "#006699",
                          }}
                          scope="col"
                        >
                          {datas?.Header}
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ fontSize: "8px" }}>
                      <input
                        style={{
                          margin: "0px",
                          padding: "0px",
                          height: "12px",
                          width: "12px",
                        }}
                        type="checkbox"
                      />
                    </td>
                    <td style={{ fontSize: "10px" }}>data</td>
                    <td style={{ fontSize: "10px" }}>data</td>
                    <td style={{ fontSize: "10px" }}>data</td>
                    <td style={{ fontSize: "10px" }}>data</td>
                    <td style={{ fontSize: "10px" }}>data</td>
                    <td style={{ fontSize: "10px" }}>data</td>
                    <td style={{ fontSize: "10px" }}>data</td>
                    <td style={{ fontSize: "10px" }}>data</td>
                    <td style={{ fontSize: "10px" }}>
                      <center>
                        <input
                          type="text"
                          className="in"
                          style={{ width: "100px", marginTop: "4px" }}
                        />
                      </center>
                    </td>
                    <td style={{ fontSize: "10px" }}>data</td>
                    <td style={{ fontSize: "10px" }}>data</td>
                    <td style={{ fontSize: "10px" }}>data</td>
                    <td style={{ fontSize: "10px" }}>
                      <center>
                        <select style={{ width: "100px" }}>
                          <option selected>select</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                        </select>
                      </center>
                    </td>
                    <td style={{ fontSize: "10px" }}>
                      <center>
                        <input
                          type="text"
                          className="in"
                          style={{ width: "100px", marginTop: "4px" }}
                        />
                      </center>
                    </td>
                    <td style={{ fontSize: "10px" }}>data</td>
                    <td style={{ fontSize: "10px" }}>
                      <Button
                        variant="contained"
                        color="success"
                        sx={{ fontSize: "11px", height: "28px" }}
                      >
                        Show
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Paper>
          <Stack
            spacing={1}
            justifyContent="center"
            className="ms-1 me-1 mt-2"
            direction={{ lg: "row", md: "row", sm: "column", xs: "column" }}
          >
            <Paper className="col-sm-2" elevation={2}>
              <Divider
                style={{
                  //   backgroundColor: "#6a8ca8",
                  backgroundColor: "maroon",
                  color: "white",
                  fontSize: "10px",
                  fontFamily: "Times New Roman",
                }}
              >
                LCL DETAILS
              </Divider>
              <Stack
                spacing={1}
                className="ms-1 me-1 mt-2"
                style={{ fontSize: "11px" }}
                direction={{
                  lg: "row",
                  md: "row",
                  sm: "column",
                  xs: "column",
                }}
              >
                <TextField
                  size="small"
                  label="LCL No"
                  style={{ width: "50%" }}
                  sx={{
                    "& > :not(style)": {
                      fontSize: "11px",
                      color: "black",
                      height: "28px",
                      // width: { lg: "120px" },
                    },
                  }}
                />
                <TextField
                  size="small"
                  label="LCL Date"
                  style={{ width: "50%" }}
                  sx={{
                    "& > :not(style)": {
                      fontSize: "11px",
                      color: "black",
                      height: "28px",
                      // width: { lg: "120px" },
                    },
                  }}
                />
              </Stack>
              <Stack
                spacing={1}
                className="ms-1 me-1 mt-2"
                style={{ fontSize: "11px" }}
                direction={{
                  lg: "row",
                  md: "row",
                  sm: "column",
                  xs: "column",
                }}
              >
                <TextField
                  size="small"
                  label="Branch Code"
                  style={{ width: "50%" }}
                  sx={{
                    "& > :not(style)": {
                      fontSize: "11px",
                      color: "black",
                      height: "28px",
                      // width: { lg: "120px" },
                    },
                  }}
                />
                <TextField
                  size="small"
                  label="LCL Vou Amt"
                  style={{ width: "50%" }}
                  sx={{
                    "& > :not(style)": {
                      fontSize: "11px",
                      color: "black",
                      height: "28px",
                      // width: { lg: "120px" },
                    },
                  }}
                />
              </Stack>
              <Stack
                spacing={1}
                className="ms-1 me-1 mt-2"
                style={{ fontSize: "11px" }}
                direction={{
                  lg: "row",
                  md: "row",
                  sm: "column",
                  xs: "column",
                }}
              >
                <TextField
                  size="small"
                  label="LCL Adv Amt"
                  style={{ width: "50%" }}
                  sx={{
                    "& > :not(style)": {
                      fontSize: "11px",
                      color: "black",
                      height: "28px",
                      // width: { lg: "120px" },
                    },
                  }}
                />
                <TextField
                  size="small"
                  label="LCL Bal Amt"
                  style={{ width: "50%" }}
                  sx={{
                    "& > :not(style)": {
                      fontSize: "11px",
                      color: "black",
                      height: "28px",
                      // width: { lg: "120px" },
                    },
                  }}
                />
              </Stack>
              <Stack
                spacing={1}
                className="ms-1 me-1 mt-2"
                style={{ fontSize: "11px" }}
                direction={{
                  lg: "row",
                  md: "row",
                  sm: "column",
                  xs: "column",
                }}
              >
                <TextField
                  size="small"
                  label="LCL TDS %"
                  style={{ width: "50%" }}
                  sx={{
                    "& > :not(style)": {
                      fontSize: "11px",
                      color: "black",
                      height: "28px",
                      // width: { lg: "120px" },
                    },
                  }}
                />
                <TextField
                  size="small"
                  label="Net Amt"
                  style={{ width: "50%" }}
                  sx={{
                    "& > :not(style)": {
                      fontSize: "11px",
                      color: "black",
                      height: "28px",
                      // width: { lg: "120px" },
                    },
                  }}
                />
              </Stack>
            </Paper>
            <Paper className="col-sm" elevation={2}>
              <Divider
                style={{
                  //   backgroundColor: "#6a8ca8",
                  backgroundColor: "maroon",
                  color: "white",
                  fontSize: "10px",
                  fontFamily: "Times New Roman",
                }}
              >
                PAYMENT DETAILS
              </Divider>

              <Stack
                spacing={1}
                className="ms-1 me-1 mt-2"
                style={{ fontSize: "11px" }}
                direction={{
                  lg: "row",
                  md: "row",
                  sm: "column",
                  xs: "column",
                }}
              >
                <Stack sx={{ width: "70%" }}>
                  <Stack
                    spacing={1}
                    className="ms-1 me-1"
                    style={{ fontSize: "11px" }}
                    direction={{
                      lg: "row",
                      md: "row",
                      sm: "column",
                      xs: "column",
                    }}
                  >
                    <TextField
                      size="small"
                      label="Payment Date"
                      style={{ width: "25%" }}
                      sx={{
                        "& > :not(style)": {
                          fontSize: "11px",
                          color: "black",
                          height: "28px",
                        },
                      }}
                    />
                    <Autocomplete
                      size="small"
                      sx={{ width: "25%" }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Payment Type"
                          sx={{
                            "& > :not(style)": {
                              fontSize: "11px",
                              color: "black",
                              height: "28px",
                            },
                          }}
                        />
                      )}
                    />
                    <Autocomplete
                      size="small"
                      sx={{ width: "50%" }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Account Code"
                          sx={{
                            "& > :not(style)": {
                              fontSize: "11px",
                              color: "black",
                              height: "28px",
                            },
                          }}
                        />
                      )}
                    />
                  </Stack>
                  <Stack
                    spacing={1}
                    className="ms-1 me-1 mt-2"
                    style={{ fontSize: "11px" }}
                    direction={{
                      lg: "row",
                      md: "row",
                      sm: "column",
                      xs: "column",
                    }}
                  >
                    <Autocomplete
                      size="small"
                      sx={{ width: "50%" }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Bank A/C No"
                          sx={{
                            "& > :not(style)": {
                              fontSize: "11px",
                              color: "black",
                              height: "28px",
                            },
                          }}
                        />
                      )}
                    />
                    <Autocomplete
                      size="small"
                      sx={{ width: "50%" }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Transaction Type"
                          sx={{
                            "& > :not(style)": {
                              fontSize: "11px",
                              color: "black",
                              height: "28px",
                            },
                          }}
                        />
                      )}
                    />
                  </Stack>
                  <Stack
                    spacing={1}
                    className="ms-1 me-1 mt-2"
                    style={{ fontSize: "11px" }}
                    direction={{
                      lg: "row",
                      md: "row",
                      sm: "column",
                      xs: "column",
                    }}
                  >
                    <TextField
                      size="small"
                      label="Cheque No"
                      style={{ width: "25%" }}
                      sx={{
                        "& > :not(style)": {
                          fontSize: "11px",
                          color: "black",
                          height: "28px",
                          // width: { lg: "120px" },
                        },
                      }}
                    />
                    <TextField
                      size="small"
                      label="Cheque Date"
                      style={{ width: "50%" }}
                      sx={{
                        "& > :not(style)": {
                          fontSize: "11px",
                          color: "black",
                          height: "28px",
                          // width: { lg: "120px" },
                        },
                      }}
                    />
                    <TextField
                      size="small"
                      label="Pan No"
                      style={{ width: "25%" }}
                      sx={{
                        "& > :not(style)": {
                          fontSize: "11px",
                          color: "black",
                          height: "28px",
                          // width: { lg: "120px" },
                        },
                      }}
                    />
                  </Stack>
                  <Stack
                    spacing={1}
                    className="ms-1 me-1 mt-2"
                    style={{ fontSize: "11px" }}
                    direction={{
                      lg: "row",
                      md: "row",
                      sm: "column",
                      xs: "column",
                    }}
                  >
                    <Box
                      component="span"
                      style={{
                        border: "0px dashed grey",
                        width: "100%",
                        backgroundColor: "#cccc99",
                        borderRadius: "10px",
                      }}
                      className="text-center"
                    >
                      <b
                        style={{
                          fontSize: "12px",
                          display: "inline",
                          //   color: "red",
                        }}
                      >
                        To Bill For Extra Payment
                      </b>
                      &nbsp;&nbsp;&nbsp;
                      <FormControl>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                          // defaultValue={formType}
                        >
                          <FormControlLabel
                            sx={{
                              "&> :not(style)": {
                                fontSize: "12px",
                                color: "black",
                              },
                            }}
                            value="Y"
                            control={<Radio size="small" sx={{ py: "0px" }} />}
                            label="Yes"
                          />
                          <FormControlLabel
                            sx={{
                              "&> :not(style)": {
                                fontSize: "12px",
                                color: "black",
                              },
                            }}
                            value="N"
                            control={<Radio size="small" sx={{ py: "0px" }} />}
                            label="No"
                          />
                        </RadioGroup>
                      </FormControl>
                    </Box>
                  </Stack>
                  <div
                    style={{
                      overflowY: "auto",
                      overflowX: "auto",
                      marginTop:"5px",
                      height:"130px"
                    }}
                  >
                    <table className="fl-table" id="tab2">
                      <thead>
                        <tr>
                          {tblHeader2.map((datas, i) => {
                            return (
                              <th
                                style={{
                                  fontSize: "10px",
                                  backgroundColor: "#006699",
                                }}
                                scope="col"
                              >
                                {datas?.Header}
                              </th>
                            );
                          })}
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td style={{ fontSize: "8px" }}>
                            <input
                              style={{
                                margin: "0px",
                                padding: "0px",
                                height: "12px",
                                width: "12px",
                              }}
                              type="checkbox"
                            />
                          </td>
                          <td style={{ fontSize: "10px" }}>data</td>
                          <td style={{ fontSize: "10px" }}>data</td>
                          <td style={{ fontSize: "10px" }}>data</td>
                          <td style={{ fontSize: "10px" }}>data</td>
                          <td style={{ fontSize: "10px" }}>data</td>
                          <td style={{ fontSize: "10px" }}>data</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Stack>
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{ borderColor: "maroon" }}
                />
                <Stack sx={{ width: "30%" }}>
                  <Stack
                    spacing={1}
                    className="ms-1 me-1"
                    style={{ fontSize: "11px" }}
                    direction={{
                      lg: "row",
                      md: "row",
                      sm: "column",
                      xs: "column",
                    }}
                  >
                    <TextField
                      size="small"
                      label="Balance Amt"
                      style={{ width: "50%" }}
                      sx={{
                        "& > :not(style)": {
                          fontSize: "11px",
                          color: "black",
                          height: "28px",
                          // width: { lg: "120px" },
                        },
                      }}
                    />
                    <TextField
                      size="small"
                      label="Handling Amt"
                      style={{ width: "50%" }}
                      sx={{
                        "& > :not(style)": {
                          fontSize: "11px",
                          color: "black",
                          height: "28px",
                          // width: { lg: "120px" },
                        },
                      }}
                    />
                  </Stack>
                  <Stack
                    spacing={1}
                    className="ms-1 me-1 mt-2"
                    style={{ fontSize: "11px" }}
                    direction={{
                      lg: "row",
                      md: "row",
                      sm: "column",
                      xs: "column",
                    }}
                  >
                    <TextField
                      size="small"
                      label="Other Amt"
                      style={{ width: "50%" }}
                      sx={{
                        "& > :not(style)": {
                          fontSize: "11px",
                          color: "black",
                          height: "28px",
                          // width: { lg: "120px" },
                        },
                      }}
                    />
                    <TextField
                      size="small"
                      label="Deduction Amt"
                      style={{ width: "50%" }}
                      sx={{
                        "& > :not(style)": {
                          fontSize: "11px",
                          color: "black",
                          height: "28px",
                          // width: { lg: "120px" },
                        },
                      }}
                    />
                  </Stack>
                  <Stack
                    spacing={1}
                    className="ms-1 me-1 mt-2"
                    style={{ fontSize: "11px" }}
                    direction={{
                      lg: "row",
                      md: "row",
                      sm: "column",
                      xs: "column",
                    }}
                  >
                    <TextField
                      size="small"
                      label="Sub Amt"
                      style={{ width: "50%" }}
                      sx={{
                        "& > :not(style)": {
                          fontSize: "11px",
                          color: "black",
                          height: "28px",
                          // width: { lg: "120px" },
                        },
                      }}
                    />
                    <TextField
                      size="small"
                      label="TDS Amt"
                      style={{ width: "50%" }}
                      sx={{
                        "& > :not(style)": {
                          fontSize: "11px",
                          color: "black",
                          height: "28px",
                          // width: { lg: "120px" },
                        },
                      }}
                    />
                  </Stack>
                  <Stack
                    spacing={1}
                    className="ms-1 me-1 mt-2"
                    style={{ fontSize: "11px" }}
                    direction={{
                      lg: "row",
                      md: "row",
                      sm: "column",
                      xs: "column",
                    }}
                  >
                    <TextField
                      size="small"
                      label="CGST"
                      style={{ width: "50%" }}
                      sx={{
                        "& > :not(style)": {
                          fontSize: "11px",
                          color: "black",
                          height: "28px",
                          // width: { lg: "120px" },
                        },
                      }}
                    />
                    <TextField
                      size="small"
                      label="SGST"
                      style={{ width: "50%" }}
                      sx={{
                        "& > :not(style)": {
                          fontSize: "11px",
                          color: "black",
                          height: "28px",
                          // width: { lg: "120px" },
                        },
                      }}
                    />
                  </Stack>
                  <Stack
                    spacing={1}
                    className="ms-1 me-1 mt-2"
                    style={{ fontSize: "11px" }}
                    direction={{
                      lg: "row",
                      md: "row",
                      sm: "column",
                      xs: "column",
                    }}
                  >
                    <TextField
                      size="small"
                      label="IGST"
                      style={{ width: "50%" }}
                      sx={{
                        "& > :not(style)": {
                          fontSize: "11px",
                          color: "black",
                          height: "28px",
                          // width: { lg: "120px" },
                        },
                      }}
                    />
                    <TextField
                      size="small"
                      label="Net Payment Amt"
                      style={{ width: "50%" }}
                      sx={{
                        "& > :not(style)": {
                          fontSize: "11px",
                          color: "black",
                          height: "28px",
                          // width: { lg: "120px" },
                        },
                      }}
                    />
                  </Stack>
                  <Stack
                    spacing={1}
                    className="ms-1 me-1 mt-2"
                    style={{ fontSize: "11px" }}
                    direction={{
                      lg: "row",
                      md: "row",
                      sm: "column",
                      xs: "column",
                    }}
                  >
                    <TextField
                      size="small"
                      label="Contract With"
                      style={{ width: "50%" }}
                      sx={{
                        "& > :not(style)": {
                          fontSize: "11px",
                          color: "black",
                          height: "28px",
                          // width: { lg: "120px" },
                        },
                      }}
                    />
                    <TextField
                      size="small"
                      label="Broker Code"
                      style={{ width: "50%" }}
                      sx={{
                        "& > :not(style)": {
                          fontSize: "11px",
                          color: "black",
                          height: "28px",
                          // width: { lg: "120px" },
                        },
                      }}
                    />
                  </Stack>
                </Stack>
              </Stack>
            </Paper>
            <Paper className="col-sm-3" elevation={2}>
              <Divider
                style={{
                  //   backgroundColor: "#6a8ca8",
                  backgroundColor: "maroon",
                  color: "white",
                  fontSize: "10px",
                  fontFamily: "Times New Roman",
                }}
              >
                VENDOR DETAILS & CREDIT DETAILS
              </Divider>
              <Stack
                    spacing={1}
                    className="ms-1 me-1 mt-2"
                    style={{ fontSize: "11px" }}
                    direction={{
                      lg: "row",
                      md: "row",
                      sm: "column",
                      xs: "column",
                    }}
                  >
                    <TextField
                      size="small"
                      label="Vendor Code"
                      style={{ width: "50%" }}
                      sx={{
                        "& > :not(style)": {
                          fontSize: "11px",
                          color: "black",
                          height: "28px",
                          // width: { lg: "120px" },
                        },
                      }}
                    />
                    <TextField
                      size="small"
                      label="Vendor Bill No"
                      style={{ width: "50%" }}
                      sx={{
                        "& > :not(style)": {
                          fontSize: "11px",
                          color: "black",
                          height: "28px",
                          // width: { lg: "120px" },
                        },
                      }}
                    />
                  </Stack>
                  <Stack
                    spacing={1}
                    className="ms-1 me-1 mt-2"
                    style={{ fontSize: "11px" }}
                    direction={{
                      lg: "row",
                      md: "row",
                      sm: "column",
                      xs: "column",
                    }}
                  >
                    <TextField
                      size="small"
                      label="Vendor Bill Date"
                      style={{ width: "50%" }}
                      sx={{
                        "& > :not(style)": {
                          fontSize: "11px",
                          color: "black",
                          height: "28px",
                          // width: { lg: "120px" },
                        },
                      }}
                    />
                    <TextField
                      size="small"
                      label="Vendor Bill Base Amt"
                      style={{ width: "50%" }}
                      sx={{
                        "& > :not(style)": {
                          fontSize: "11px",
                          color: "black",
                          height: "28px",
                          // width: { lg: "120px" },
                        },
                      }}
                    />
                  </Stack>
                  <Stack
                    spacing={1}
                    className="ms-1 me-1 mt-2"
                    style={{ fontSize: "11px" }}
                    direction={{
                      lg: "row",
                      md: "row",
                      sm: "column",
                      xs: "column",
                    }}
                  >
                    <TextField
                      size="small"
                      label="Vendor Bill SGST"
                      style={{ width: "50%" }}
                      sx={{
                        "& > :not(style)": {
                          fontSize: "11px",
                          color: "black",
                          height: "28px",
                          // width: { lg: "120px" },
                        },
                      }}
                    />
                    <TextField
                      size="small"
                      label="Vendor Bill CGST"
                      style={{ width: "50%" }}
                      sx={{
                        "& > :not(style)": {
                          fontSize: "11px",
                          color: "black",
                          height: "28px",
                          // width: { lg: "120px" },
                        },
                      }}
                    />
                  </Stack>
                  <Stack
                    spacing={1}
                    className="ms-1 me-1 mt-2"
                    style={{ fontSize: "11px" }}
                    direction={{
                      lg: "row",
                      md: "row",
                      sm: "column",
                      xs: "column",
                    }}
                  >
                    <TextField
                      size="small"
                      label="Vendor Bill IGST"
                      style={{ width: "50%" }}
                      sx={{
                        "& > :not(style)": {
                          fontSize: "11px",
                          color: "black",
                          height: "28px",
                          // width: { lg: "120px" },
                        },
                      }}
                    />
                    <TextField
                      size="small"
                      label="CN Invoice No"
                      style={{ width: "50%" }}
                      sx={{
                        "& > :not(style)": {
                          fontSize: "11px",
                          color: "black",
                          height: "28px",
                          // width: { lg: "120px" },
                        },
                      }}
                    />
                  </Stack>
                  <Stack
                    spacing={1}
                    className="ms-1 me-1 mt-2"
                    style={{ fontSize: "11px" }}
                    direction={{
                      lg: "row",
                      md: "row",
                      sm: "column",
                      xs: "column",
                    }}
                  >
                    <TextField
                      size="small"
                      label="CN Invoice Date"
                      style={{ width: "50%" }}
                      sx={{
                        "& > :not(style)": {
                          fontSize: "11px",
                          color: "black",
                          height: "28px",
                          // width: { lg: "120px" },
                        },
                      }}
                    />
                    <TextField
                      size="small"
                      label="CN Invoice Base Amt(-)"
                      style={{ width: "50%" }}
                      sx={{
                        "& > :not(style)": {
                          fontSize: "11px",
                          color: "black",
                          height: "28px",
                          // width: { lg: "120px" },
                        },
                      }}
                    />
                  </Stack>
                  <Stack
                    spacing={1}
                    className="ms-1 me-1 mt-2"
                    style={{ fontSize: "11px" }}
                    direction={{
                      lg: "row",
                      md: "row",
                      sm: "column",
                      xs: "column",
                    }}
                  >
                    <TextField
                      size="small"
                      label="CN Invoice Base SGST(-)"
                      style={{ width: "50%" }}
                      sx={{
                        "& > :not(style)": {
                          fontSize: "11px",
                          color: "black",
                          height: "28px",
                          // width: { lg: "120px" },
                        },
                      }}
                    />
                    <TextField
                      size="small"
                      label="CN Invoice Base CGST(-)"
                      style={{ width: "50%" }}
                      sx={{
                        "& > :not(style)": {
                          fontSize: "11px",
                          color: "black",
                          height: "28px",
                          // width: { lg: "120px" },
                        },
                      }}
                    />
                  </Stack>
                  <Stack
                    spacing={1}
                    className="ms-1 me-1 mt-2"
                    style={{ fontSize: "11px" }}
                    direction={{
                      lg: "row",
                      md: "row",
                      sm: "column",
                      xs: "column",
                    }}
                  >
                    <TextField
                      size="small"
                      label="CN Invoice Base IGST(-)"
                      style={{ width: "50%" }}
                      sx={{
                        "& > :not(style)": {
                          fontSize: "11px",
                          color: "black",
                          height: "28px",
                          // width: { lg: "120px" },
                        },
                      }}
                    />
                    <TextField
                      size="small"
                      label="CN Invoice Base Total(-)"
                      style={{ width: "50%" }}
                      sx={{
                        "& > :not(style)": {
                          fontSize: "11px",
                          color: "black",
                          height: "28px",
                          // width: { lg: "120px" },
                        },
                      }}
                    />
                  </Stack>
                  
            </Paper>
          </Stack>
          <Stack
            spacing={1}
            className="ms-3 me-3"
            direction={{ lg: "row", md: "row", sm: "column", xs: "column" }}
            justifyContent="center"
            my="10px"
          >
            <Button
              variant="contained"
              color="success"
              sx={{ fontSize: "11px", height: "28px" }}
              startIcon={<SaveIcon fontSize="11px" />}
            >
              Save
            </Button>
            <Button
              variant="contained"
              color="error"
              sx={{ fontSize: "11px", height: "28px" }}
              startIcon={<CloseIcon fontSize="11px" />}
            >
              Clear
            </Button>
          </Stack>
        </form>
      </Card>
    </div>
  );
};

export default LclFinelPayment;
