import "./Moto.scss";
import MotoInfo from "./MotoInfo/MotoInfo";
import Preloader from "../common/Preloader/Preloader";
import Paginator from "../common/Paginator/Paginator";
import Parameters from "../Parameters/Parameters";

const Moto = (props) => {
    const motoItems = props.portionMotos.map((moto, i) => <MotoInfo key={i} spec={moto}/>);

    return <section className="moto">
        <Parameters searchVehicle={props.searchMotos} />
        {props.isEmpty ?
            <div className="empty">THERE ARE NO MOTO, MAYBE YOU HAVE SET THE INCORRECT PARAMETERS</div> :
            props.isFetching ? <Preloader/> : <div>
                <div className="moto__container">
                    {motoItems}
                </div>
                <Paginator totalItemsCount={props.totalMotosCount} pageSize={props.pageSize}
                           onPageChanged={props.onChange}
                           currentPage={props.currentPage}/>
            </div>

        }
    </section>
}

export default Moto;
