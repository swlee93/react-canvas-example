import React, { createContext, useCallback, useEffect, useMemo, useRef, useState } from 'react'

import { getSize } from '../utils/common'
import fetchData from './data'
import Layer from './Layer'
import { SizeMirror, LayersGrid } from './TopologyStyle'
export const TopologyContext = createContext<{ data: any[] }>({ data: [] })
const Topology = () => {
  const [groupBy, setGroupBy] = useState('onode')
  const [layers, setLayers] = useState<any[]>([])
  const [data, setData] = useState<any[]>([])
  useEffect(() => {
    fetchData().then((d) => setData(d))
  }, [])

  const sizeMirror = useRef<HTMLDivElement>(null)
  const [size, setSize] = useState<DOMRect | null>(null)
  useEffect(() => {
    if (sizeMirror?.current) {
      setSize(getSize(sizeMirror?.current))
    }
  }, [])

  // reduce data
  useEffect(() => {
    const layers = data.reduce((acc, datum, index) => {
      const groupKey = datum[groupBy] || 'no_group'
      if (!acc[groupKey]) {
        acc[groupKey] = []
      }
      acc[groupKey].push(datum)
      return acc
    }, {})
    setLayers(Object.values(layers))
  }, [data, groupBy])

  return (
    <TopologyContext.Provider value={{ data }}>
      <div>
        <LayersGrid>
          {layers.map((layerData, index) => (
            <Layer key={index} index={index} data={layerData} size={size} />
          ))}
        </LayersGrid>
        <SizeMirror ref={sizeMirror} />
      </div>
    </TopologyContext.Provider>
  )
}

export default Topology
