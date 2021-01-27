import {StyleSheet} from "react-native";

export const style = StyleSheet.create({
    container: {
        width: "100%",
        display: 'flex',
        flexDirection: "column",
        paddingVertical: 12,
        marginBottom: 8,
        backgroundColor: "#fff",
    },
    topSide: {
        display: 'flex',
        flexDirection: "column",
        paddingHorizontal: 16,
        marginVertical: 12
    },
    divider: {
        width: "100%",
        height: 1,
        backgroundColor: "#D8D8D8",
    },
    bottomSide: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingVertical: 12
    },
    //DOTS
    dotContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 8
    },
    dotOuterRec: {
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 10,
        height: 10,
        backgroundColor: "#000",
        borderRadius: 5,

    },
    dotInnerRec: {
        width: 4,
        height: 4,
        backgroundColor: "#fff",
        borderRadius: 3,
    },
    dotTextContainer: {
        marginLeft: 8
    },
    dotText: {
        fontSize: 14,
        fontWeight: "600",
    },
    dotLine: {
        position: "absolute",
        left: 4,
        top: 10,
        height: 16,
        width: 2,
        backgroundColor: "#000",
    },
    // END
    descriptionView: {
        height: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        marginVertical: 6
    },
    //DETAIL CARD SECTION
    detailView: {
        display: "flex",
        flexDirection: "column",
    },
    detailViewItem: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 8
    },
    detailViewImage: {
        width: 17,
        height: 17,
        marginRight: 9
    },
    detailViewItemTexts: {
        flexDirection: "row",
        alignItems: "center",
    },
    detailViewText: {
        fontSize: 14,
        fontWeight: "300",
        color: "#8A8A8A"
    },
    detailViewStrongText: {
        fontSize: 14,
        fontWeight: "400",
        color: "#000000"
    },
    //BUTTON SECTION && MID
    midContainer: {
        display: "flex",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        marginVertical: 6
    },
    midCost: {
        fontSize: 16,
        fontWeight: "700"
    },
    midButtonContainer: {
        height: 40,
        minWidth: 110,
        maxWidth: 130,
    },
    midButton: {
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: "#FFD247",
        borderRadius: 4
    },
    midButtonText: {
        color: "#171717",
        fontSize: 14,
        fontFamily: "MontserratRegular"
    },
    userInfo: {
        display: 'flex',
        flexDirection: "row",
        alignItems: "center"
    },
    userImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 8
    },
    userDetail: {
        display: "flex",
        flexDirection: "column",
    },
    userName: {
        fontSize: 14,
        color: "#8A8A8A",

    },
    userRelease: {
        fontSize: 12,
        color: "#8A8A8A",
    },
});