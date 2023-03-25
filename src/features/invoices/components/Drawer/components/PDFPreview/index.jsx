import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Svg,
  Line,
} from "@react-pdf/renderer";
import { Fragment } from "react";

export const PDFPreview = ({ getValues }) => {
  const { client, fixed } = getValues();

  const totalPrice = fixed.reduce(
    (accumulator, currentValue) => +accumulator + +currentValue.price,
    0
  );

  const generateDate = new Date().toDateString();
  const styles = StyleSheet.create({
    page: {
      flexDirection: "col",
    },
    section: {
      margin: 10,
      padding: 10,
    },
    header: {
      display: "flex",

      alignItems: "center",
      flexGrow: 1,
    },
    flex_row: {
      display: "flex",
      flexDirection: "row",
    },
    flex_col: {
      display: "flex",
      flexDirection: "col",
    },
    items_center: {
      display: "flex",
      alignItems: "center",
    },
    border: {
      borderWidth: "1px",
      borderRadius: "6px",
    },
    padding: {
      padding: "40px",
    },
    image: {
      width: "70px",
      height: "40px",
    },
    bold: {
      fontWeight: "600",
    },
    space_Between: {
      justifyContent: "space-between",
    },
    h5: {
      marginBottom: "16px",
      marginTop: "20px",
    },
    p: {
      fontSize: "14px",
      display: "flex",
      flexDirection: "column",
      gap: "2px",
    },
    Skeleton: {
      backgroundColor: "#777",
      width: "150px",
      height: "25px",
    },
    span: {
      display: "block",
      fontSize: "14px",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    },
    span_gray: {
      color: "#777",
    },
    span_black: {
      color: "#000",
    },
    service: {
      display: "flex",
      marginTop: "56px",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
    },
    itemName: {
      fontWeight: "400",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      width: "60%",
    },
    itemSpan: {
      textAlign: "right",
      overflowWrap: "break-word",
      width: "20%",
    },
    calc: {
      marginLeft: "auto",
      fontSize: "14px",
    },
  });
  function getStyle(...rest) {
    return rest.reduce((a, b) => ({ ...a, ...b }), {});
  }
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View
          style={getStyle(
            styles.section,
            styles.flex_col,
            styles.border,
            styles.padding
          )}
        >
          <View
            style={getStyle(
              styles.flex_row,
              styles.items_center,
              styles.space_Between
            )}
          >
            <View style={getStyle(styles.flex_col, styles.bold)}>
              <Text>Invoice</Text>
              <Text>#INV-003</Text>
            </View>
            <Image
              src={"/assets/img/logo.png"}
              width={70}
              height={39}
              style={getStyle(styles.image)}
            />
          </View>

          <View
            style={getStyle(
              styles.flex_row,
              styles.items_center,
              styles.space_Between
            )}
          >
            <View>
              <Text style={getStyle(styles.h5)}>From</Text>
              <Text>Talents Valley LLC</Text>
              <View style={styles.p}>
                <Text style={getStyle(styles.span, styles.span_gray)}>
                  30 North Gould St.
                </Text>
                <Text style={getStyle(styles.span, styles.span_gray)}>
                  Sheridan, Wyoming 82801
                </Text>
                <Text style={getStyle(styles.span, styles.span_gray)}>
                  United States
                </Text>
                <Text style={getStyle(styles.span, styles.span_gray)}>
                  +1 307-217-6666
                </Text>
              </View>
            </View>
            <View>
              <Text style={getStyle(styles.h5)}>Bill To</Text>
              <View style={styles.p}>
                <Text style={getStyle(styles.span, styles.span_black)}>
                  {client?.fullName ? (
                    client?.fullName
                  ) : (
                    <View style={styles.Skeleton} />
                  )}
                </Text>
                <Text style={getStyle(styles.span, styles.span_gray)}>
                  {client?.email ? (
                    client.email
                  ) : (
                    <View style={styles.Skeleton} />
                  )}
                </Text>
                <Text
                  style={getStyle(styles.span, styles.span_black, {
                    marginTop: "14px",
                  })}
                >
                  Issue Date
                </Text>
                <Text style={getStyle(styles.span, styles.span_gray)}>
                  {generateDate}
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.service}>
            <Text style={getStyle(styles.span_black, { marginBottom: "10px" })}>
              Service
            </Text>
            <Text style={getStyle(styles.span_black, { marginBottom: "10px" })}>
              Amount
            </Text>
          </View>

          <View>
            {fixed ? (
              fixed.map((item, index) => {
                return (
                  <Fragment key={index}>
                    <View
                      key={index}
                      style={getStyle(styles.flex_row, styles.space_Between)}
                    >
                      {item.itemName ? (
                        <Text style={styles.itemName}>{item.itemName}</Text>
                      ) : (
                        <Text style={styles.Skeleton} />
                      )}
                      {item.price ? (
                        <Text style={styles.itemSpan}>${item.price}</Text>
                      ) : (
                        <Text
                          style={getStyle(styles.Skeleton, { width: "50px" })}
                        />
                      )}
                    </View>
                    {item.description ? (
                      <Text style={getStyle(styles.span, styles.span_gray)}>
                        {item.description}
                      </Text>
                    ) : (
                      <Text
                        style={getStyle(styles.Skeleton, {
                          width: "180px",
                        })}
                      />
                    )}
                  </Fragment>
                );
              })
            ) : (
              <View style={flex_row}>
                <Text style={getStyle(styles.Skeleton, { width: "160px" })} />
                <Text style={getStyle(styles.Skeleton, { width: "60px" })} />
              </View>
            )}
            <Svg height="4" width="100%" style={{ marginVertical: "10px" }}>
              <Line
                x1="0"
                y1="0"
                x2="500"
                y2="0"
                strokeWidth={2}
                stroke="#777"
              />
            </Svg>
          </View>

          <View style={styles.calc}>
            <View style={getStyle(styles.flex_row, styles.space_Between)}>
              <Text>Sub Total</Text>
              {totalPrice ? (
                <Text style={styles.span_gray}>${totalPrice}</Text>
              ) : (
                <Text style={styles.span_gray}>
                  <Skeleton width={60} />
                </Text>
              )}
            </View>
            <View style={getStyle(styles.flex_row, styles.space_Between)}>
              <Text>Fees</Text>
              <Text style={styles.span_gray}>$0</Text>
            </View>
            <Svg height="4" width="100" style={{ marginVertical: "10px" }}>
              <Line
                x1="0"
                y1="0"
                x2="100"
                y2="0"
                strokeWidth={2}
                stroke="#777"
              />
            </Svg>
            <View style={getStyle(styles.flex_row, styles.space_Between)}>
              <Text>Total</Text>
              {totalPrice ? (
                <Text> $ {totalPrice}</Text>
              ) : (
                <Text style={styles.Skeleton} />
              )}
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};
export default PDFPreview;
