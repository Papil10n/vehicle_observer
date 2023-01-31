import Preloader from "../common/Preloader/Preloader";
import Paginator from "../common/Paginator/Paginator";
import HelicoptersInfo from "./HelicoptersInfo/HelicoptersInfo";
import "./Helicopters.scss";
import Parameters from "../Parameters/Parameters";

const Helicopters = (props) => {
    const copterItems = props.portionCopters.map((copter, i) => <HelicoptersInfo key={i} spec={copter}/>);

    return <section className="helicopter">
        <Parameters searchVehicle={props.searchHelicopters}/>
        {props.isEmpty ?
            <div className="empty">THERE ARE NO HELICOPTERS, MAYBE YOU HAVE SET THE INCORRECT PARAMETERS</div> :
            props.isFetching ? <Preloader/> : <div>
                <div className="helicopter__container">
                    {copterItems}
                </div>
                <Paginator totalItemsCount={props.totalCoptersCount} pageSize={props.pageSize}
                           onPageChanged={props.onChange}
                           currentPage={props.currentPage}/>
            </div>

        }
    </section>
}

export default Helicopters;
