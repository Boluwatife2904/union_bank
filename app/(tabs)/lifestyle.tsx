import AndroidSafeArea from "@/components/layout/AndroidSafeArea";
import PageHeader from "@/components/navigation/PageHeader";
import ActionsList from "@/components/common/ActionsList";

import { AirplandeMode, CalendarIcon, HotelIcon, FilmRollIcon } from "@/constants/icons";

const list = [
    { icon: <AirplandeMode />, title: "Flight Booking", href: "" },
    { icon: <CalendarIcon color={'#009FDF'} />, title: "Event Ticket", href: "" },
    { icon: <HotelIcon />, title: "Hotel Booking", href: "" },
    { icon: <FilmRollIcon />, title: "Movie Ticker", href: "" },
];

const LifeStyleScreen = () => {
    return (
        <AndroidSafeArea>
            <PageHeader title="Lifestyle" />
            <ActionsList list={list} />
        </AndroidSafeArea>
    );
};

export default LifeStyleScreen;
