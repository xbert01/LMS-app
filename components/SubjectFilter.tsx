'use client'
import React, { useState, useEffect } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
 import { subjects } from '@/constants'
import { formUrlQuery, removeKeysFromUrlQuery } from '@jsmastery/utils'
import { useRouter, useSearchParams } from 'next/navigation'



const SubjectFilter = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const query = searchParams.get('subject') || '';
    const [filterSubject, setFilterSubject] = useState(query);

  useEffect(() => {
    let newUrl = '';
    if (filterSubject === 'all') {
          newUrl = removeKeysFromUrlQuery({
          params: searchParams.toString(),
          keysToRemove: ['subject']
        });
    } else {
        newUrl = formUrlQuery({
            params: searchParams.toString(),
            key: 'subject',
            value: filterSubject,
          });
        }
        router.push(newUrl, {scroll: false});
  }, [filterSubject]);

  return (
   <Select onValueChange={(value) => setFilterSubject(value)}>
    <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Subjects" />
    </SelectTrigger>
    <SelectContent>
        <SelectItem key='none' value='all' className='capitalize'>All</SelectItem>
        {subjects.map((subject) => (
            <SelectItem key={subject} value={subject} className='capitalize'>{subject}</SelectItem>
        ))}
    </SelectContent>
    </Select>
  )
}

export default SubjectFilter