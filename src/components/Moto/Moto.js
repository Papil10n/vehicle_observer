import "./Moto.scss";
import MotoInfo from "./MotoInfo/MotoInfo";
import Preloader from "../common/Preloader/Preloader";
import Paginator from "../common/Paginator/Paginator";
import ParametersContainer from "../Parameters/ParametersContainer";

const Moto = (props) => {
    const motoItems = props.portionMotos.map((moto, i) => <MotoInfo key={i} spec={moto}/>);

    return <section className="moto">
        <ParametersContainer searchVehicle={props.searchMotos} uri='moto' />
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
