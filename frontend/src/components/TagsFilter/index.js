import { Chip, Paper, TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import React, { useState } from "react";

export function TagsFilter () {
    const [selecteds, setSelecteds] = useState([]);

    const onChange = (value) => {
        setSelecteds(value);
    }

    return (
        <Paper style={{padding: 10}}>
            <Autocomplete
                multiple
                size="small"
                options={[]}
                value={selecteds}
                onChange={(e, v, r) => onChange(v)}
                getOptionLabel={(option) => option.name}
                renderTags={(value, getTagProps) =>
                    value.map((option, index) => (
                        <Chip
                            variant="outlined"
                            style={{backgroundColor: '#eee', textShadow: '1px 1px 1px #000', color: 'white'}}
                            label={option.name}
                            {...getTagProps({ index })}
                            size="small"
                        />
                    ))
                }
                renderInput={(params) => (
                    <TextField {...params} variant="outlined" placeholder="Filtro por Tags" />
                )}
            />
        </Paper>
    )
}
