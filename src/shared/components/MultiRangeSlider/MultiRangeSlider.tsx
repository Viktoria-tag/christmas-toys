import {
  ChangeEvent,
  FC,
  useCallback,
  useEffect,
  useRef,
  useState
} from "react";
import classnames from "classnames";

import s from "./MultiRangeSlider.module.scss";
import { useSearchParams } from "react-router-dom";
import useDebouncedFunction from "shared/hooks/useDeboucedFunction";


interface MultiRangeSliderProps {
  min: number;
  max: number;
  minRangeName:string;
  maxRangeName:string
}

export const MultiRangeSlider: FC<MultiRangeSliderProps> = ({
  min,
  max,
  minRangeName,
  maxRangeName
}) => {

  const minValRef = useRef<HTMLInputElement>(null);
  const maxValRef = useRef<HTMLInputElement>(null);
  const range = useRef<HTMLDivElement>(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const startMinValue= searchParams.get(minRangeName)||min
  const startMaxValue =  searchParams.get(maxRangeName)||max
  const [minVal, setMinVal] = useState<number>(+startMinValue);
  const [maxVal, setMaxVal] = useState<number>(+startMaxValue);

  const setFilter = (name: string, value: string) => {
    searchParams.set(name, value)
    setSearchParams(searchParams)
  }

  const debouncedSetSearchParams = useDebouncedFunction(setFilter, 300);

  const getPercent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(+maxValRef.current.value);

      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [minVal, getPercent]);

  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value);
      const maxPercent = getPercent(maxVal);

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }

  }, [maxVal, getPercent]);


  const onChangeLeftRange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(+event.target.value, maxVal - 1);
    setMinVal(value);
    event.target.value = value.toString();
    debouncedSetSearchParams(  minRangeName, value.toString())
  }

  const onChangeRightRange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(+event.target.value, minVal + 1);
    setMaxVal(value);
    event.target.value = value.toString();
    debouncedSetSearchParams(  maxRangeName, value.toString())
  }

  return (
    <>

      <div className={s.container}>
        <input
          type="range"
          min={min}
          max={max}
          value={minVal}
          ref={minValRef}
          onChange={(event: ChangeEvent<HTMLInputElement>) => onChangeLeftRange(event)}
          className={classnames(s.thumb, s.thumb__zindex3, { [s.thumb__zindex5]: !!(minVal - max - 100) })}
        />
        <input
          type="range"
          min={min}
          max={max}
          value={maxVal}
          ref={maxValRef}
          onChange={(event: ChangeEvent<HTMLInputElement>) => onChangeRightRange(event)}
          className={classnames(s.thumb, s.thumb__zindex4)}
        />

        <div className={s.slider}>
          <div className={s.slider__track}></div>
          <div ref={range} className={s.slider__range}></div>
          <div className={s.slider__leftValue}>{minVal}</div>
          <div className={s.slider__rightValue}>{maxVal}</div>
        </div>
      </div>
    </>
  );
};
