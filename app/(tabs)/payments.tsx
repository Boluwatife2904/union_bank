import AndroidSafeArea from "@/components/layout/AndroidSafeArea";
import PageHeader from "@/components/navigation/PageHeader";
import ActionsList from "@/components/common/ActionsList";

import {
    SentIcon,
    SmartphoneIcon,
    CelllarNetworkIcon,
    InvoiceIcon,
    QRCodeIcon,
    ModernTVIcon,
    MoneyExchangeIcon,
    BulbChargingIcon,
    StakeIcon,
} from "@/constants/icons";

const list = [
    { icon: <SentIcon />, title: "Transfer", href: "" },
    { icon: <SmartphoneIcon />, title: "Airtime", href: "" },
    { icon: <CelllarNetworkIcon />, title: "Data", href: "" },
    { icon: <InvoiceIcon />, title: "Bill", href: "" },
    { icon: <QRCodeIcon />, title: "QR Code", href: "" },
    { icon: <SmartphoneIcon />, title: "E-naira", href: "" },
    { icon: <MoneyExchangeIcon />, title: "FX Request", href: "" },
    { icon: <BulbChargingIcon />, title: "Utility", href: "" },
    { icon: <ModernTVIcon />, title: "Cable TV", href: "" },
    { icon: <StakeIcon />, title: "Betting", href: "" },
];

const PaymentsScreen = () => {
    return (
        <AndroidSafeArea>
            <PageHeader title="Payments" />
            <ActionsList list={list} />
        </AndroidSafeArea>
    );
};

export default PaymentsScreen;
